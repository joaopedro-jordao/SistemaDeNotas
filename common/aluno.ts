export class Aluno {
    nome: string;
    cpf: string;
    email: string;
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.nome = "";
      this.cpf = "";
      this.email = "";
    }
  
    clone(): Aluno {
      var aluno: Aluno = new Aluno();
      aluno.copyFrom(this);
      return aluno;
    }
  
    copyFrom(from: Aluno): void {
      this.nome = from.nome;
      this.cpf = from.cpf;
      this.email = from.email;
    }
    setNome(nome: string){
      this.nome = nome;
    }
    setCpf(cpf: string){
      this.cpf = cpf;
    }
    setEmail(email: string){
      this.email = email;
    }
  }