interface TransactionalEmailType {
  subject: string;
  to: string;
  from: string;
  title: string;
}

export default {
  key: 'SendTransactionalEmail',
  handle({
    data: { subject, to, from = 'wiki4fit@wiki4fit.com.br', title },
  }: {
    data: TransactionalEmailType;
  }): void {
    const transactionalEmail = {
      subject,
      to,
      from,
      title,
    };

    // eslint-disable-next-line no-console
    console.log(transactionalEmail);
  },
};
