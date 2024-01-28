import { Card } from '@/components/ui';
import { Form } from '@remix-run/react';
import { AuthStrategies } from '~/services/auth_strategies';
import type { AuthStrategy } from '~/services/auth.server';
import { Button } from '@/components/ui/button';

interface SocialButtonProps {
  provider: AuthStrategy;
  label: string;
}

const SocialButton = ({ provider, label }: SocialButtonProps) => (
  <Form action={`/auth/${provider}`} method="post">
    <Button>{label}</Button>
  </Form>
);

export function UserAuthLogin() {
  return (
    <>
      <Card className="mx-auto px-4 py-4">
        <h1 className="mb-2">Login</h1>
        <SocialButton
          provider={AuthStrategies.GOOGLE}
          label="Login menggunakan google"
        />
      </Card>
    </>
  );
}
