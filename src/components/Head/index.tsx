import {useEffect} from 'react'

export const Head = (props: {title: string; description: string;}) => {
  useEffect(() => {
    document.title = props.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', props.description);
  }, [props]);

  return <></>;
};
