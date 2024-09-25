import React, { useState } from "react";
import "../Styles/RegisterStyles.css";
import Image from "../Assets/Open Peeps - Bust.png";
import Background from "../Assets/Background-açai-1.png"

const Register = () => {
    const [step, setStep] = useState(1); // Estado para controlar o passo atual

    const handleNextStep = () => {
        setStep((prevStep) => Math.min(prevStep + 1, 5)); // Limita o passo máximo em 5
    };

    const handlePrevStep = () => {
        setStep((prevStep) => Math.max(prevStep - 1, 1)); // Limita o passo mínimo em 1
    };

    return (
        <div className="register">
            <div className="background-rotated">
            </div>
            <div className="container-register">
                <div className="sections-container">
                    <div className="section-info">
                        <div className="info-parts">
                            <img src={Image} alt="" />
                            <p>descrição</p>
                        </div>
                    </div>
                    <div className="section-form">
                        <form className="form-cadastro">
                            <h1>Cadastro</h1>
                            <p>Faça seu cadastro para participar do evento!</p>

                            {step === 1 && (
                                <>
                                    <div className="input-group">
                                        <label htmlFor="nome">Nome:</label>
                                        <input type="text" id="nome" name="nome" required />
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="sobrenome">Sobrenome:</label>
                                        <input type="text" id="sobrenome" name="sobrenome" required />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" required />
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="numero">Número:</label>
                                        <input type="tel" id="numero" name="numero" required />
                                    </div>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <h2>Endereço</h2>
                                    <div className="input-group">
                                        <label htmlFor="pais">País:</label>
                                        <input type="text" id="pais" name="pais" required />
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="estado">Estado:</label>
                                        <input type="text" id="estado" name="estado" required />
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="cidade">Cidade:</label>
                                        <input type="text" id="cidade" name="cidade" required />
                                    </div>
                                </>
                            )}

                            {step === 3 && (
                                <>
                                    <div className="input-group">
                                        <label htmlFor="tipoUsuario">Tipo de Usuário:</label>
                                        <select id="tipoUsuario" name="tipoUsuario" required>
                                            <option value="">Selecione</option>
                                            <option value="aluno">Aluno</option>
                                            <option value="professor">Professor</option>
                                            <option value="profissional">Profissional</option>
                                            <option value="empresa">Empresa</option>
                                        </select>
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="vinculo">Vínculo (Instituição ou Empresa):</label>
                                        <input type="text" id="vinculo" name="vinculo" required/>
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="escolaridade">Nível de Escolaridade:</label>
                                        <input type="text" id="escolaridade" name="escolaridade" required />
                                    </div>
                                </>
                            )}

                            {step === 4 && (
                                <>
                                    <div className="input-group">
                                        <label htmlFor="sexo">Sexo:</label>
                                        <select id="sexo" name="sexo" required>
                                            <option value="">Selecione</option>
                                            <option value="masculino">Masculino</option>
                                            <option value="feminino">Feminino</option>
                                            <option value="outro">Outro</option>
                                        </select>
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="nomeSocial">Nome Social (Opcional):</label>
                                        <input type="text" id="nomeSocial" name="nomeSocial" />
                                    </div>

                                    <div className="input-group">
                                        <label htmlFor="senha">Senha:</label>
                                        <input type="password" id="senha" name="senha" required />
                                    </div>
                                </>
                            )}

                            <div className="navigation-buttons">
                                {step > 1 && (
                                    <button type="button" onClick={handlePrevStep}>
                                        Voltar
                                    </button>
                                )}
                                {step < 4 ? (
                                    <button type="button" onClick={handleNextStep}>
                                        Próximo
                                    </button>
                                ) : (
                                    <button type="submit" className="btn-cadastro">
                                        Cadastrar-se
                                    </button>
                                )}
                            </div>
                        </form>

                        {/* Indicador de Progresso */}
                        <div className="progress-indicator">
                            {[1, 2, 3, 4].map((num) => (
                                <span
                                    key={num}
                                    className={`dot ${step === num ? 'active' : ''}`}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;