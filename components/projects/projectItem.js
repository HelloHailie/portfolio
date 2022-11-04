import Image from "next/image";

export default function ProjectItem({ data }) {
  const title = data.properties.Name.title[0].plain_text;
  const description = data.properties.Description.rich_text[0].plain_text;
  const github = data.properties.Github.url;
  const utube = data.properties.Utube.url;
  const notion = data.properties.Notion.url;
  const distribution = data.properties.Distribution.url;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const startDate = data.properties.WorkPeriod.date.start;
  const endDate = data.properties.WorkPeriod.date.end;
  const team = data.properties.team.rich_text[0].plain_text;
  const role = data.properties.role.rich_text[0].plain_text;
  const operation = data.properties.operation.rich_text[0].plain_text;

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

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result + 1;
  };

  return (
    <div className='project-card'>
      <a href={distribution}>
        <Image
          className='rounded-t-xl'
          src={imgSrc}
          width={100}
          height={100}
          alt='project cover image'
          layout='responsive'
          objectFit='none'
          quality={100}
        />
      </a>
      <div className='p-4 flex flex-col'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <h3 className='mt-4 text-lg'>{description}</h3>
        {team === "개인" ? (
          <h3 className='mt-3 mb-1'>개인 프로젝트</h3>
        ) : (
          <h3 className='mt-3'>팀: {team}</h3>
        )}

        {role === "개인" ? null : <h3 className='mt-1 mb-1'>역할: {role}</h3>}

        {operation === "개인" ? null : (
          <div className='mt-1 mb-4 bg-violet-100 rounded p-2 dark:text-violet-900'>
            {operation}
          </div>
        )}
        <a href={distribution}>🔗 배포 링크 바로가기</a>
        <a href={github}>🔗 깃허브 링크 바로가기</a>

        {notion ? <a href={notion}>🔗 노션 링크 바로가기</a> : null}

        {utube ? <a href={utube}>🔗 유튜브 시연영상 바로가기</a> : null}
        <h4 className='my-2'>
          작업 기간 : {startDate} ~ {endDate} (
          {calculatedPeriod(startDate, endDate)}
          일)
        </h4>
        <div className='flex items-start mt-2 overflow-auto'>
          {tags.map((aTag) => (
            <h1
              className='px-1 py-1 mr-2 rounded-md bg-violet-600 dark:bg-violet-500 text-white w-30 '
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
