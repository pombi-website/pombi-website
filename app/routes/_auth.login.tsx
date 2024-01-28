import { Layout } from '@/components/layout';
import { UserAuthLogin } from '@/shared/user-auth-login';

export default function LoginRoute() {
  return (
    <Layout>
      <UserAuthLogin />
    </Layout>
  );
}
