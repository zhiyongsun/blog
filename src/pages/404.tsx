import { Link } from '@/components/common/Link';

const View = () => (
  <div className="vstack items-center p-8 bg-primary-1">
    <p className="mb-4 text-sm md:text-base font-bold uppercase text-accent-1">
      404
    </p>
    <h1 className="mb-2 text-2xl md:text-3xl font-bold text-primary-1">
      页面不存在
    </h1>

    <p className="mb-12 text-gray-500 dark:text-gray-300 md:text-lg">
      您访问的页面不存在
    </p>

    <Link href="/" passHref>
      <a className="px-10 button">首页</a>
    </Link>
  </div>
);

export default View;
