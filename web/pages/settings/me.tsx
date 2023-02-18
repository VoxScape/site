import { FC, useEffect } from 'react';
import { trpcClient, trpcReactClient } from '../../src/api/trpc';
import { useAsyncEffect } from '@jokester/ts-commonutil/lib/react/hook/use-async-effect';

const ProfilePage: FC = () => {
  useAsyncEffect(async () => {
    const f = await trpcClient.user.getOwnProfile.query();
    console.debug('f', f);
  }, []);
  return <div>TODO</div>;
};

export default ProfilePage;
