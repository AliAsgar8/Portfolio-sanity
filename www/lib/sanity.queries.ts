export const SITE_SETTINGS_QUERY = `
*[_type == "siteSettings"][0]{
  siteTitle,
  "logoUrl": logo.asset->url,
  navigation
}
`;

export const PAGE_QUERY = `
*[_type == "page" && slug.current == $slug][0]{
  title,
  sections[]{
    _type,
    title,


    _type == "hero" => {
      hero
    },

    _type == "about" => {
    "image": image.asset -> url,
     about,
     aboutCard[] -> {
     _id,
     title,
     description
     }
    },
    
    _type == "skillsSection" => {
      "skills": *[_type == "skill"]
    },

    _type == "experienceSection" => {
      "experiences": *[_type == "experience"]
    },

    _type == "projectsSection" => {
      "projects": *[_type == "project"]
    }
  }
}
`;
