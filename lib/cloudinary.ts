export function getCloudinaryUrl(url: string, width: number = 1200) {
    if (!url || !url.includes("res.cloudinary.com")) return url;

    // Check if valid cloudinary url structure
    if (!url.includes("/upload/")) return url;

    // Use f_auto (auto format: webp/avif), q_auto (auto quality), and w_ (width)
    // This allows Cloudinary to serve the most optimized version for the user's browser
    return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`);
}
