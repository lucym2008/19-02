import { auth } from '@/src/firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';

export const handleRecuperarSenha = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert('Email de recuperação enviado com sucesso! Verifique sua caixa de entrada.');
  } catch (error: any) {
    let mensagemErro = 'Ocorreu um erro ao enviar o email de recuperação.';
    
    switch (error.code) {
      case 'auth/invalid-email':
        mensagemErro = 'Email inválido.';
        break;
      case 'auth/user-not-found':
        mensagemErro = 'Não existe conta associada a este email.';
        break;
      case 'auth/too-many-requests':
        mensagemErro = 'Muitas tentativas. Tente novamente mais tarde.';
        break;
      default:
        console.error('Erro na recuperação de senha:', error);
    }
    
    alert(mensagemErro);
  }
};