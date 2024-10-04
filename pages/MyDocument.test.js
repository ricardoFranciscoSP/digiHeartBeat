import MyDocument from './_document';
import Document from 'next/document';

jest.mock('next/document', () => {
  const originalModule = jest.requireActual('next/document');
  return {
    __esModule: true,
    ...originalModule,
    default: class {
      static getInitialProps = jest.fn().mockResolvedValue({});
    },
  };
});

describe('MyDocument', () => {
  it('deve logar ctx.query e armazenar id em ctx', async () => {
    const ctx = {
      query: { pageId: 'test-id' },
      renderPage: jest.fn(),
    };

    // Mock do console.log
    console.log = jest.fn();

    await MyDocument.getInitialProps(ctx);

    // Verifica se console.log foi chamado com os argumentos corretos
    expect(console.log).toHaveBeenCalledWith('ctx.query', { pageId: 'test-id' });
    expect(console.log).toHaveBeenCalledWith('ctx.id', 'test-id');
    
    // Verifica se o ctx contém o id correto
    expect(ctx).toHaveProperty('id', 'test-id');
  });

  it('deve usar o id padrão se ctx.query.pageId não for fornecido', async () => {
    const ctx = {
      query: {}, // Sem id na query
      renderPage: jest.fn(),
    };

    await MyDocument.getInitialProps(ctx);

    // Verifica se o ctx contém o id padrão
    expect(ctx).toHaveProperty('id', 'default-id');
  });
});