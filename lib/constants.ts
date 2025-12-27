export const SMOOTH_EASE = [0.19, 1, 0.22, 1] as any; // easeOutExpo-ish but heavier
export const DURATION = 0.8;

export const FADE_IN_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: DURATION,
            ease: SMOOTH_EASE
        }
    }
};
