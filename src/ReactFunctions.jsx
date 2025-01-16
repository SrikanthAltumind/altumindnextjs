const gradientColors = ["#0755f2", "#5bc4a9", "#0654f3"];

export const gradientStyle = {
  backgroundImage: `linear-gradient(to right, ${gradientColors.join(", ")})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export const customRenderers = {
  ul: ({ children }) => (
    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>{children}</ul>
  ),
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="object-contain sm:max-w-[600px]  mx-auto"
    />
  )
};


export const convertToUrlFormat = (str) => {
  return str
    .trim()
    .toLowerCase()
    .replace(/[\s:]+/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
    .toLowerCase()
};
