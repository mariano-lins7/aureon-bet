# AUREON GAMES

Protótipo mobile-first de entretenimento com identidade roxa e dourada. O projeto usa exclusivamente créditos e pontos fictícios, sem depósitos, saques, apostas ou prêmios monetários.

## Experiências incluídas

- Painel inicial e navegação responsiva
- Cadastro, login, recuperação e redefinição de senha via Supabase Auth
- Perfil de usuário
- Pontos, histórico e bônus de presença com intervalo de 24 horas
- Baús de recompensas fictícias
- AUREON Tigrinho (slot demonstrativo)
- Minas, Aviator, Double e Roleta em modo de simulação
- Carteira visual com depósitos e saques desativados

## Tecnologias

- HTML, CSS e JavaScript
- Supabase Auth e catálogo de jogos
- GitHub Pages / GitHub Actions

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` publica a raiz do repositório quando houver push em `main`.

No repositório, abra **Settings → Pages → Build and deployment → Source** e selecione **GitHub Actions**. Depois confira a aba **Actions** para o resultado do deploy.

URL esperada do site: https://mariano-lins7.github.io/aureon-bet/

## Configuração de autenticação

No Supabase, em **Authentication → URL Configuration**:
- Site URL: `https://mariano-lins7.github.io/aureon-bet/`
- Redirect URLs: adicionar exatamente `https://mariano-lins7.github.io/aureon-bet/`

Confirme também que o provedor **Email** está habilitado. Para produção, configure SMTP próprio e revise os modelos de e-mail e limites de envio.

## Segurança e limites do protótipo

- Apenas a chave pública publishable do Supabase é usada no navegador.
- Nunca inserir service-role key ou segredo no frontend.
- O catálogo público de jogos permanece protegido por RLS e leitura pública somente.
- Saldo, histórico e recompensas desta demonstração são armazenados localmente no navegador; não são saldos persistentes nem mecanismos antifraude.
- Não conectar gateways de pagamento, depósitos, saques, prêmios em dinheiro ou conversão de créditos.
- Antes de qualquer produto financeiro ou jogo com valor monetário, obter revisão jurídica e técnica independente e as autorizações aplicáveis.
