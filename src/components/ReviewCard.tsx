import { star } from "../assets/icons";

type ReviewCardProps = {
    imgURL: string;
    customerName: string;
    rating: number;
    feedback: string;
  };

const ReviewCard = ({ imgURL, customerName, rating, feedback }: ReviewCardProps) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]" />
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3 flex flex-col justify-center items-center gap-2.5">
            <div className="flex gap-2">
                <img src={star} width={24} height={24}
                className="object-contain m-0"/>
                <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
            </div>
            <h3 className="font-palanquin text-3xl text-center font-bold">{customerName}</h3>
        </div>
    </div>
  )
}

export default ReviewCard;
