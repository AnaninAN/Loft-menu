import cls from './AppModal.module.scss';

import React, { ReactNode, useCallback, useEffect, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { AppPortal } from '@/shared/ui/AppPortal';
import { AppButton } from '@/shared/ui/AppButton';

interface AppModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const AppModal = (props: AppModalProps) => {
  const { children, className, isOpen, onClose, lazy } = props;

  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      setIsMounted(false);
    }
  }, [isOpen]);

  const handlerClose = useCallback(() => {
    if (onClose) {
      onClose();
      setIsMounted(false);
    }
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <AppPortal>
      <div
        className={classNames(cls.modal, { [cls.opened]: isOpen }, [className])}
      >
        <div className={cls.overlay} onClick={handlerClose}>
          <div className={cls.content} onClick={onContentClick}>
            <AppButton close className={cls.close} onClick={onClose} />
            {children}
          </div>
        </div>
      </div>
    </AppPortal>
  );
};
