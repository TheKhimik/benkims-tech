import { services as localServices } from "./servicesData";
import { supabase } from "./supabase";

type LocalService = {
  title: string;
  description: string;
  images?: string[];
};

export type MergedService = {
  title: string;
  description: string;
  image_url: string;
  local_image: string;
};

const normalizeTitle = (title: string) => title.trim().toLowerCase();

export async function getMergedServices(): Promise<MergedService[]> {
  const { data: remoteServices, error } = await supabase
    .from("services")
    .select("title,description,image_url")
    .order("id");

  const localMap = new Map(
    localServices.map((service: LocalService) => [normalizeTitle(service.title), service])
  );

  if (error) {
    console.warn(`Supabase services unavailable — using local fallback: ${error.message}`);
  }

  const merged = localServices.map((local) => {
    const key = normalizeTitle(local.title);
    const remote = (remoteServices ?? []).find(
      (service) => normalizeTitle(service.title) === key
    );

    const localImage = local.images?.[0] || "/images/hero1.jpg";

    return {
      title: local.title,
      description:
        remote?.description?.trim() || local.description?.trim() ||
        "Reliable services delivered with care and quality.",
      image_url: remote?.image_url?.trim() || localImage,
      local_image: localImage,
    };
  });

  for (const remote of remoteServices ?? []) {
    const key = normalizeTitle(remote.title);
    if (!localMap.has(key)) {
      merged.push({
        title: remote.title.trim(),
        description:
          remote.description?.trim() ||
          "Reliable services delivered with care and quality.",
        image_url: remote.image_url?.trim() || "/images/hero1.jpg",
        local_image: "/images/hero1.jpg",
      });
    }
  }

  return merged;
}
