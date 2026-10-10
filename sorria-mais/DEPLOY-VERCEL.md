# Publicação da Sorria Mais Brasil

Repositório: https://github.com/wesantos10/meuprojeto

O site da clínica fica em `sorria-mais/dist/`. Os arquivos anteriores do repositório são preservados. O `vercel.json` na raiz do repositório configura a pasta publicada.

## Vercel

1. Entre em https://vercel.com/new e importe `wesantos10/meuprojeto`.
2. Mantenha Root Directory na raiz do repositório (`./`).
3. Framework Preset: Other. Não há comando de instalação ou build. Output Directory: `sorria-mais/dist` (configurado no vercel.json).
4. Publique e aguarde o estado Ready. Acesse o endereço retornado pela Vercel.
5. Com a integração GitHub ativa, novos commits na branch de produção geram novas publicações.

## Conteúdo

Configure o WhatsApp oficial em `sorria-mais/dist/script.js`, na constante `CLINIC_WHATSAPP`. Sem configuração, o formulário apenas prepara uma mensagem e não envia solicitações. Os depoimentos reais e dados da clínica ainda devem ser preenchidos.

Documentação: https://vercel.com/docs/project-configuration/vercel-json
