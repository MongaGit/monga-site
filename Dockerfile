# Usar a imagem do Node.js
FROM node:18-alpine

# Definir diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos do projeto
COPY package.json package-lock.json ./
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Expor a porta usada pelo Vite
EXPOSE 5173

# Comando para iniciar o servidor de desenvolvimento
CMD ["npm", "run", "dev", "--", "--host"]
