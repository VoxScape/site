import { FC } from 'react';
import type { SafeUser } from '../../server/api/common/primitive';
import clsx from 'clsx';
import { pixelBorders, pixelFonts } from '../styles/pixelBorders';
import { dateUtils } from '../../shared/date_utils';

export const UserCard: FC<{ user: SafeUser; className?: string }> = (props) => {
  return (
    <div className={clsx(pixelBorders.box.light, 'inline-flex', props.className)}>
      <img alt="avatar" src={props.user.image} className={clsx('h-48 w-48 flex-0')} />
      <div className="w-64 px-4 py-2 flex flex-col">
        <h5 className={clsx(pixelFonts.base, 'text-left text-lg')}>{props.user.name ?? '(name unset)'}</h5>
        <hr />
        <div className="flex-1" />
        <div className="flex justify-between">
          <span className={clsx(pixelFonts.base, 'text-sm')}>Joined</span>
          <span className="text-sm">{dateUtils.asRelative(props.user.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};
