import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy= jest.fn();
const sendMailSpy= jest.fn();
const submitFeedbaack = new SubmitFeedbackUseCase(
    {create:createFeedbackSpy},
    { sendMail:sendMailSpy}
    )
describe('Submit feedback',()=>{
    it('should be able to submit feedback',async ()=>{
        

            await expect(submitFeedbaack.execute({
                type: 'BUG',
                commment: 'example comment',
                screenshot: 'data:image/png;base64,8184861dasdewafgg15dd',
            })).resolves.not.toThrow();

            expect(createFeedbackSpy).toHaveBeenCalled();
            expect(sendMailSpy).toHaveBeenCalled();
    })
    it('should not be able to submit feedback without  type',async ()=>{
        

        await expect(submitFeedbaack.execute({
            type: '',
            commment: 'example comment',
            screenshot: 'data:image/png;base64,8184861dasdewafgg15dd',
        })).rejects.toThrow();
})
it('should not be able to submit feedback without comment',async ()=>{
        

    await expect(submitFeedbaack.execute({
        type: 'BUG',
        commment: '',
        screenshot: 'data:image/png;base64,8184861dasdewafgg15dd',
    })).rejects.toThrow();
})
it('should not be able to submit feedback with an invalid screenshot',async ()=>{
        

    await expect(submitFeedbaack.execute({
        type: 'BUG',
        commment: 'example comment',
        screenshot: 'test.jpg',
    })).rejects.toThrow();
})
     
    
})