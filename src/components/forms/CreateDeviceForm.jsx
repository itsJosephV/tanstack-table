/* eslint-disable react/prop-types */
const CreateDeviceForm = ({ table }) => {
  const { data } = table.options;

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = [...formData.values()];
    const isEmpty = values.includes("");

    if (isEmpty) {
      alert("fill all the camps");
      return;
    }

    const deviceProperties = Object.fromEntries(formData);
    console.log(deviceProperties);
    console.log(data);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5 mt-7">
      <label className="flex flex-col gap-1">
        Name
        <input
          required
          className="rounded-md"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
        />
      </label>
      <label className="flex flex-col gap-1">
        Location
        <input
          required
          className="rounded-md"
          type="text"
          name="location"
          id="location"
          placeholder="Location"
        />
      </label>
      <label className="flex flex-col gap-1">
        Station name
        <input
          required
          type="text"
          className="rounded-md"
          name="station-name"
          id="station-name"
          placeholder="Station name"
        />
      </label>
      <button className="bg-stone-300 py-2 rounded-md">Create device</button>
    </form>
  );
};

export default CreateDeviceForm;
