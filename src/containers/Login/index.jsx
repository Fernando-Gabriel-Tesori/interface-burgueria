import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import {
    Container,
    LeftContainer,
    RightContainer,
    Title,
    Form,
    InputContainer,
    Link,
    ErrorMessage,
} from './styles';

import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';
import api from '../../services/api';

// Definição do schema de validação com Yup
const schema = yup.object({
    email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: yup
        .string()
        .min(8, 'A senha deve ter pelo menos 8 caracteres')
        .required('Digite uma senha'),
}).required();

export function Login() {
    const navigate = useNavigate();

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm({
        resolver: yupResolver(schema),
    });

    // Função para submissão do formulário
    const onSubmit = async (data) => {
        try {
            const response = await toast.promise(
                api.post('/sessions', {
                    email: data.email,
                    password: data.password,
                }),
                {
                    pending: 'Verificando dados...',
                    success: {
                        render(){
                            setTimeout(()=>{
                                navigate('/');
                            }, 2000);
                         return 'Seja Bem-vindo(a)👌!';
                        },
                    },
                    error: 'Erro, verifique senha ou email',
                },
            );

            const { token } = response.data;
            
            localStorage.setItem('token', token);

            setTimeout(() => {
                navigate('/');
            }, 2000);

        } catch (error) {
            console.error('Erro ao realizar login:', error);
            toast.error('Erro ao realizar login, tente novamente.');
        }
    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo Devburguer" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem-vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input 
                            type="email" 
                            {...register('email')} 
                        />
                        {errors.email && (
                            <ErrorMessage>{errors.email.message}</ErrorMessage>
                        )}
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input 
                            type="password" 
                            {...register('password')} 
                        />
                        {errors.password && (
                            <ErrorMessage>{errors.password.message}</ErrorMessage>
                        )}
                    </InputContainer>
                    <Button type="submit">Entrar</Button>
                </Form>
                <p>Não possui conta? <Link to="/cadastro">Clique aqui</Link></p>
            </RightContainer>
            <ToastContainer autoClose={2000} theme="colored" />
        </Container>
    );
}
