export default function DetailNews({date, time, author}) {
    return (
        <>
            <div className='flex items-center'>
                <p className='text-sm uppercase font-medium text-gray-300'>{date} . {time}</p>
            </div>
            <div className='flex items-center gap-3'>
                <p>&#x23AF;&#x23AF;</p>
                <p className='text-sm uppercase font-medium'>by {author}</p>
            </div>
        </>
    )
}
