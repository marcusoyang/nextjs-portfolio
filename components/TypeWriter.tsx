import Typewriter from 'typewriter-effect';

const TypeWriter = (props: any) => {
    return (
        <>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(props.children).start();
                }}
                options={{
                    cursor: '',
                    delay: 50,
                }}
            />
        </>
    );
};

export default TypeWriter;
