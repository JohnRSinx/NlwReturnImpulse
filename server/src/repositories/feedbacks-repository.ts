export interface FeedbackCreateData {
    type: string;
    commment: string;
    screenshot: string;

}
export interface FeedbacksRepository { 
    create: (data: FeedbackCreateData) => Promise<void>;
}