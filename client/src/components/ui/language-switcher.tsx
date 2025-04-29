import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LANGUAGES } from '@/i18n';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className="language-switcher">
      <Select
        value={i18n.language}
        onValueChange={changeLanguage}
      >
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder={t('common.language')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={LANGUAGES.EN}>
            {t('common.language', { lng: LANGUAGES.EN })}
          </SelectItem>
          <SelectItem value={LANGUAGES.ZH_CN}>
            {t('common.language', { lng: LANGUAGES.ZH_CN })}
          </SelectItem>
          <SelectItem value={LANGUAGES.ZH_TW}>
            {t('common.language', { lng: LANGUAGES.ZH_TW })}
          </SelectItem>
          <SelectItem value={LANGUAGES.JA}>
            {t('common.language', { lng: LANGUAGES.JA })}
          </SelectItem>
          <SelectItem value={LANGUAGES.VI}>
            {t('common.language', { lng: LANGUAGES.VI })}
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;