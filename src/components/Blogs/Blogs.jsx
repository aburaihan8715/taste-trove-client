const Blogs = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="mb-8">
          <h4 className="text-3xl text-gray-600 font-medium">What is the difference between controlled and uncontrolled components?</h4>
          <div className="mt-2">
            <strong>Ans :</strong> When the input fields of components controlled by react those components are called controlled components and when
            react does not interfere of form inputs means controlled by default those components are called uncontrolled components.
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-3xl text-gray-600 font-medium">How to validate react props using props type?</h4>
          <div className="mt-2">
            <strong>Ans :</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut doloribus necessitatibus vitae odio cupiditate ad id
            porro molestiae dolores facere alias repellat enim reiciendis numquam culpa totam, expedita distinctio pariatur?{" "}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-3xl text-gray-600 font-medium">What is the difference between node js and express js?</h4>
          <div className="mt-2">
            <strong>Ans :</strong> Node js is javascript run time means we can write javascript code on that platform, more specific we can write
            server code on that run time .Express js is framework for node js.We can manage server code easily by express js.
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-3xl text-gray-600 font-medium">What is the custom hook, and why will we create a custom hook?</h4>
          <div className="mt-2">
            <strong>Ans :</strong> Custom hook is nothing but a function.If we want to share same code or same logic in many components custom hook
            comes to the table.In this way we can reduce repetition of code.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
