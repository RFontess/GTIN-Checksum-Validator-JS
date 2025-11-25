# 📦 Validador de Código de Barras GS1 (GTIN)

Aplicação web desenvolvida para validar e calcular o dígito verificador de códigos de barras, com foco em Programação Orientada a Objetos (POO).

### Tecnologias:
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)

🔗 **[Acesse o Projeto Online Aqui](https://gtin-checksum-validator-js.vercel.app)**

---

## 💡 Motivação e Foco do Estudo

Este projeto nasceu de uma experiência real: durante meu estágio de suporte, o sistema apresentou a recusa de uma Nota Fiscal (NFe) pela SEFAZ, devido a erros de validação em códigos EAN-13. Essa falha despertou minha curiosidade em entender e replicar a lógica por trás desses códigos.

O objetivo primário deste desenvolvimento foi **aprimorar meus conhecimentos em:**
1.  **Programação Orientada a Objetos (POO):** Utilizando classes para encapsular a lógica de negócio.
2.  **Separação de Responsabilidades:** Isolando a matemática pura da interface do usuário (DOM).
3.  **Algoritmos:** Implementação do algoritmo **Módulo 10 (GS1)**.

## ⚙️ Destaques Técnicos

Este projeto demonstra o uso de tecnologias modernas e a aplicação de boas práticas de desenvolvimento:

- **Classes JavaScript (ES6+):** Lógica central (pesos, somas) totalmente encapsulada na classe `validEAN`.
- **Separação de Responsabilidades:** Lógica de Cálculo (`ean-validator.js`) separada dos manipuladores de Eventos (`main.js`).
- **Algoritmo Dinâmico (GS1):** O código se adapta automaticamente para EAN-8, EAN-13, UPC-A e GTIN-14, invertendo a regra de peso (x1 e x3) conforme a paridade do número de dígitos (o que é um requisito do padrão).
- **DOM:** Uso de `addEventListener` (em vez de `onclick`) e manipulação de classes do Bootstrap para feedback visual.
- **UX / Acessibilidade:** Validação de tamanho de input e função "clique para copiar" (`Clipboard API`).

## 🔎 Funcionalidades Suportadas

O sistema utiliza o mesmo algoritmo para validar e calcular todos os formatos da família GTIN:

| Tipo | Dígitos | Uso |
| :--- | :--- | :--- |
| **EAN-8** | 8 | Produtos pequenos. |
| **UPC-A** | 12 | Padrão dos EUA/Canadá. |
| **EAN-13** | 13 | Padrão global de produtos. |
| **GTIN-14** | 14 | Embalagens de transporte/caixas máster. |

## 👨‍💻 Autor

Desenvolvido por **Rafael Fontes Tecedor** como parte de estudos em JavaScript.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rafael-fontes-tecedor/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RFontess)
