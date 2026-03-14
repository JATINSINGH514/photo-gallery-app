export default function SkeletonCard(){

  return(

    <div className="animate-pulse">

      <div className="bg-gray-300 dark:bg-gray-700 h-56 rounded-xl"></div>

      <div className="flex justify-between mt-3">

        <div className="bg-gray-300 dark:bg-gray-700 h-4 w-24 rounded"></div>

        <div className="bg-gray-300 dark:bg-gray-700 h-4 w-6 rounded"></div>

      </div>

    </div>

  )
}