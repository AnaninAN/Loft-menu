import { useTranslation } from 'react-i18next';

import { AppModal } from '@/shared/ui/AppModal/ui/AppModal';
import { AppText } from '@/shared/ui/AppText';

interface ServerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ServerModal = (props: ServerModalProps) => {
  const { isOpen, onClose } = props;
  const { t } = useTranslation();

  return (
    <AppModal isOpen={isOpen} onClose={onClose}>
      <AppText title={t('server-message')} align="center" />
    </AppModal>
  );
};
