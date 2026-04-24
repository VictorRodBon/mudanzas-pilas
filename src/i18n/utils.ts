import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        const translationDict = ui[lang];
    
        // 2. Forzamos a TS a entender que 'key' es una llave válida de ese objeto
        // @ts-ignore (Opcional si prefieres saltarte la validación profunda)
        return translationDict[key] || ui[defaultLang][key];
    }
}