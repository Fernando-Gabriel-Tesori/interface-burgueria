import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import api from '../../services/api'; // Corrigido para importação padrão
import { useNavigate } from 'react-router-dom';

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

export const Register = () => {
    const navigate = useNavigate();
    const schema = yup.object({
        name: yup.string().required('Nome é obrigatório'),
        email: yup
            .string()
            .email('Digite um e-mail válido')
            .required('O e-mail é obrigatório'),
        password: yup
            .string()
            .min(8, 'A senha deve ter pelo menos 8 caracteres')
            .required('Digite uma senha'),
        ConfirmPassword: yup
            .string()
            .min(8, 'A senha deve ter pelo menos 8 caracteres')
            .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
            .required('Confirme sua senha'),
    }).required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const { status } = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password,
            }, {
                validateStatus: () => true,
            });

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
                toast.success('Conta criada com sucesso!');
            } else if (status === 409) {
                toast.error('Email já cadastrado! Faça login para continuar');
            } else {
                throw new Error();
            }
        } catch (error) {
            toast.error('😒 Falha no sistema! Tente novamente');
        }
    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo Devburguer" />
            </LeftContainer>
            <RightContainer>
                <Title>Criar conta</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register('name')} />
                        {errors.name && (
                            <ErrorMessage>{errors.name.message}</ErrorMessage>
                        )}
                    </InputContainer>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register('email')} />
                        {errors.email && (
                            <ErrorMessage>{errors.email.message}</ErrorMessage>
                        )}
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register('password')} />
                        {errors.password && (
                            <ErrorMessage>{errors.password.message}</ErrorMessage>
                        )}
                    </InputContainer>
                    <InputContainer>
                        <label>Confirmar senha</label>
                        <input type="password" {...register('ConfirmPassword')} />
                        {errors.ConfirmPassword && (
                            <ErrorMessage>{errors.ConfirmPassword.message}</ErrorMessage>
                        )}
                    </InputContainer>
                    <Button type="submit">Criar Conta</Button>
                </Form>
                <p>Já possui conta? <Link to="/login">Clique aqui</Link></p>
            </RightContainer>
            <ToastContainer autoClose={2000} theme="colored" />
        </Container>
    );
};
