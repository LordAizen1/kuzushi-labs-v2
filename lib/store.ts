import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface IntroState {
    hasIntroRun: boolean;
    setIntroFinished: () => void;
}

export const useIntroStore = create<IntroState>()(
    persist(
        (set) => ({
            hasIntroRun: false,
            setIntroFinished: () => set({ hasIntroRun: true }),
        }),
        {
            name: 'intro-storage', // unique name
            storage: createJSONStorage(() => sessionStorage), // Use sessionStorage (clears on tab close, keeps on reload usually, or we can use localStorage for stricter session)
            // "Once per session" -> sessionStorage is safest definition.
        }
    )
);
