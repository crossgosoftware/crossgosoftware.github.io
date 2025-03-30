import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder={t('common.language')} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">{t('common.language', { lng: 'en' })}</SelectItem>
          <SelectItem value="zh_TW">{t('common.language', { lng: 'zh_TW' })}</SelectItem>
          <SelectItem value="zh_CN">{t('common.language', { lng: 'zh_CN' })}</SelectItem>
          <SelectItem value="ja">{t('common.language', { lng: 'ja' })}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;