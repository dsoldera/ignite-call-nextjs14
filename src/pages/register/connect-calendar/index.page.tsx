import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { ArrowRight, Check } from 'phosphor-react'
// import { api } from "../../../lib/axios"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Container, Header } from '../styles'
import { AuthError, ConnectBox, ConnectItem } from './styles'

export default function ConnectCalendar() {
  const session = useSession()
  const router = useRouter()

  const hasAuthError = !!router.query.error // !! converts to boolean
  const isSignedId = session.status === 'authenticated'
  
  const handleConnectCalendar = async () => {
    await signIn('google')
  }

  async function handleNavigateToNextStep() {
    await router.push('/register/time-intervals')
  }

  console.log(session)

  return (
    <Container>
      <Header>
        <Heading as="h1">
          <strong>
            Conecte sua agenda!
          </strong>
        </Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          {isSignedId ? (
            <Button size="sm" disabled>
             Conectado
              <Check />
            </Button>
          ) : (
            <Button
              type="button"
              variant="secondary"
              onClick={handleConnectCalendar} 
              size="sm">
                Conectar
                <ArrowRight />
            </Button>
          )}
        </ConnectItem>

        {hasAuthError && (
          <AuthError size="sm">
            Falha ao se conectar ao Google, verifique se você habilitou as
            permissões de acesso ao Google Calendar
          </AuthError>
        )}

        <Button 
          type="submit" 
          onClick={handleNavigateToNextStep}
          disabled={!isSignedId}>
          Próximo passo
            <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}