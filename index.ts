import inquirer from 'inquirer'

const currency:any = {
    USD : 1,
    EUR : 0.91,
    GBP : 0.76,
    INR : 74.57,
    PKR : 280,
    AED : 75.69,
    KWD : 902.22,
    CHY : 38.39,
    AFG : 3.86,
    BTK : 2.53,
    EGP : 5.84,
    SAR : 74.06,
    MAR : 58.25
};
    


let user_answer = await inquirer.prompt(
    [
        {
            name:'from',
            message:"Enter From Currency",
            type:'list',
            choices:['USD','EUR','GBP','INR','PKR','AED','KWD','CHY','AFG','BTK','EGP','SAR','MAR']
        },
        {
            name:'to',
            message:"Enter To Currency",
            type:'list',
            choices:['USD','EUR','GBP','INR','PKR','AED','KWD','CHY','AFG','BTK','EGP','SAR','MAR']
        },
        {
            name:'amount',
            message:"Enter Your Amount",
            type:'number',
         
        }
    ]
)

let fromAmount = currency[user_answer.from] //exchange rate
let toAmount = currency[user_answer.to] //exchange rate
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
