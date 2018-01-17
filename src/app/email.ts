export class Email {
    from: string;
    importance: string;
    subject: string;
    content: string;
    constructor(from: string, importance: boolean, subject: string, content: string){
        this.from = from;        
        this.subject = subject;
        this.content = content;

        if(importance === true){
            this.importance = "High";
        } else{
            this.importance = "Low";
        }
    }
}