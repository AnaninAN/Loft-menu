import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { AppSelect, SelectOption } from '@/shared/ui/AppSelect';
import type { Language } from '../model/types/language';

interface LanguageSelectProps {
  className?: string;
  value?: Language;
  onChange?: (value: Language) => void;
  readonly?: boolean;
}

export const LanguageSelect = memo((props: LanguageSelectProps) => {
  const { className, onChange, readonly, value } = props;

  const { t } = useTranslation('translation');

  const options = useMemo(
    (): SelectOption<Language>[] => [
      { value: 'ru', content: t('ru') },
      { value: 'en', content: t('en') },
    ],
    [t]
  );

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Language);
    },
    [onChange]
  );

  return (
    <AppSelect
      className={className}
      onChange={onChangeHandler}
      options={options}
      readonly={readonly}
      value={value}
    />
  );
});
