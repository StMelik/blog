import { classNames } from 'shared/lib/classNames/classNames';
import cls from './{{pascalCase}}.module.scss';

interface {{pascalCase}}Props {
	className?: string;
}

export const {{pascalCase}}: React.FC<{{pascalCase}}Props> = ({ className }) => {

	return (
		<div className={classNames(cls.{{camelCase}}, {}, [className])}>
			
		</div>
 );
}