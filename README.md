

### 📌 **1. Criar a imagem Docker**
No terminal, dentro da pasta do projeto, execute:

```sh
docker build -t mongasite .
```

---

### 📌 **2. Rodar o container na porta 5173**
Execute o container e mapeie a porta corretamente:

```sh
docker run -d -p 5173:5173 --name mongasite mongasite
```

Se quiser visualizar os logs:

```sh
docker logs -f mongasite
```

---

### 📌 **3. Acessar o site**
Agora, abra no navegador:

```
http://localhost:5173
```

