# Plantel — Reel Motion Graphics EEAR 2027

Projeto Remotion 9:16, 1080x1920, 30 FPS, 30 segundos.

## O que já está pronto

- abertura EEAR com zoom e escurecimento;
- texto "JÁ SONHOU EM ESTAR AQUI?";
- cards de questões em motion graphics;
- revelação da arte do simulado;
- benefícios animados;
- trecho emocional;
- CTA final;
- sistema de legendas dinâmicas;
- áudio de narração placeholder;
- trilha placeholder;
- efeitos sonoros básicos placeholder;
- logo Plantel e artes principais incluídas.

## Arquivos que você deve substituir

### Obrigatório

`public/audio/narracao.wav`

Grave ou gere a narração final e substitua o arquivo mantendo o nome.

### Recomendado

`public/audio/musica.wav` — substitua por uma trilha licenciada/royalty-free.

`public/images/questao-01.png`
`public/images/questao-02.png`
`public/images/gabarito.png`

Troque os placeholders por recortes reais do simulado.

### Opcional

Os SFX em `public/audio/` são placeholders simples. Você pode substituir por efeitos profissionais mantendo os mesmos nomes.

## Rodar

```bash
npm install
npm start
```

Abra a composição `SimuladoEEAR` no Remotion Studio.

## Não renderize antes da revisão

Depois de revisar no Studio:

```bash
npm run render
```

Se a máquina sofrer:

```bash
npm run render:safe
```

## Áudio e legendas

As legendas são geradas pelo arquivo:

`src/data/captions.js`

Elas NÃO dependem de transcrição automática. Os tempos estão configurados manualmente conforme a timeline de 30s.

Se a narração final mudar de duração, peça ao Codex para realinhar `captions.js` e as cenas com o áudio real.
