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
};
