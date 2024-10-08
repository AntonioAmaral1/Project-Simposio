import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import Image from "../../Assets/Alexa.png";
import "../../Styles/UserPage.css";
import { fetchUserProfile, saveUserProfile, uploadProfileImage } from './ProfileService';

function Profile() {
  // Estados para os campos do formulário
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Requisição GET para buscar os dados do perfil
    const getUserProfile = async () => {
      try {
        const data = await fetchUserProfile();
        setUsername(data.username);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEstado(data.estado);
        setCidade(data.cidade);
        setEmail(data.email);
        setPhone(data.phone);
        setPassword(data.password); // Atenção: não é recomendável exibir a senha real
      } catch (error) {
        console.error('Erro ao salvar os dados: ', error);
      }
    };

    getUserProfile();
  }, []);

  // Função para salvar as mudanças
  const handleSaveChanges = async () => {
    const userData = {
      username,
      firstName,
      lastName,
      cidade,
      estado,
      email,
      phone,
      password,
    };

    try {
      const data = await saveUserProfile(userData);
      setMessage('Perfil atualizado com sucesso!');
      console.log('Sucesso:', data);
    } catch (error) {
      setMessage('Erro ao atualizar perfil.');
      console.error('Erro:', error);
    }
  };

  // Função para fazer o upload da imagem
  const handleImageUpload = async (file) => {
    try {
      const data = await uploadProfileImage(file);
      console.log('Imagem carregada com sucesso:', data);
    } catch (error) {
      console.error('Erro ao carregar imagem:', error);
    }
  };

  return (
    <div className="container">
      <hr className="mt-0 mb-4" />
      <Row>
        <Col xl={4}>
          {/* Profile picture card */}
          <Card className="mb-4 mb-xl-0">
            <Card.Header>Foto de perfil</Card.Header>
            <Card.Body className="text-center">
              <img className="img-account-profile rounded-circle mb-2" src={Image} alt="profile" />
              <div className="small font-italic text-muted mb-4">JPG ou PNG maximo 5 MB</div>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e.target.files[0])}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={8}>
          {/* Account details card */}
          <Card className="mb-4">
            <Card.Header>Detalhes do perfil</Card.Header>
            <Card.Body>
              <Form>
                {/* Username */}
                <Form.Group className="mb-3">
                  <Form.Label>Nome de usuário (Nome exibido para os usuários do site)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Row className="gx-3 mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Nome</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Sobrenome</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="gx-3 mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Estado</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your location"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Cidade</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your location"
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Row className="gx-3 mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Telefone</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Senha</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button className="Btn" variant="primary" onClick={handleSaveChanges}>Salvar mudanças</Button>
                {message && <div className="alert alert-info">{message}</div>}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
