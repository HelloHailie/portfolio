import Image from "next/image";

export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0].plain_text;
  const description = data.properties.Description.rich_text[0].text.content;
  const github = data.properties.Github.url;
  const utube = data.properties.Utube.url;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const startDate = data.properties.WorkPeriod.date.start;
  const endDate = data.properties.WorkPeriod.date.end;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    const startDate = new Date(
      Number(startDateStringArray[0]),
      Number(startDateStringArray[1]),
      Number(startDateStringArray[2])
    ).valueOf();
    const endDate = new Date(
      Number(endDateStringArray[0]),
      Number(endDateStringArray[1]),
      Number(endDateStringArray[2])
    ).valueOf();

    console.log(`${startDate}`);
    console.log(`${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result + 1;
  };

  return (
    <div className='project-card'>
      <Image
        className='rounded-t-xl'
        src={imgSrc}
        width='100'
        height='100'
        alt='project cover image'
        layout='responsive'
        objectFit='none'
        quality={100}
      />
      <div className='p-4 flex flex-col'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <h3 className='mt-4'>{description}</h3>

        <a href={github}>깃허브 링크 바로가기</a>
        <a href={utube}>유튜브 시연영상 바로가기</a>
        <p className='my-2'>
          작업 기간 : {startDate} ~ {endDate} (
          {calculatedPeriod(startDate, endDate)}
          일)
        </p>
        <div className='flex items-start mt-2 overflow-auto'>
          {tags.map((aTag) => (
            <h1
              className='px-1 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 '
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
