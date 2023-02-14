const dummyEvents = [
  {
    title: "Medical Talk - Essential Caregiving Skills",
    dateStart: "21 Jan 2023",
    dateEnd: "",
    timeString: "9:00 am",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nunc vel ex condimentum varius at sodales nisl. Proin blandit dictum fringilla. Maecenas mattis, est a bibendum posuere, justo ligula mattis ante, ac vulputate nulla massa ut nisi. Sed et orci a sem volutpat posuere. Vestibulum nisi ipsum, vestibulum nec augue non, luctus tristique tortor. Sed tristique ligula ac nisl viverra, nec eleifend mi imperdiet. Donec convallis sagittis diam sed iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at vulputate tellus. Curabitur rutrum mauris purus, sit amet rhoncus libero gravida vulputate. Vestibulum interdum vulputate tempus. Sed finibus condimentum augue non vehicula. Donec tempus eros eget enim tempor posuere. Mauris tempus risus mi, vel elementum mi ultricies quis. Praesent nec semper tortor. Donec sed scelerisque sapien, non consectetur massa.",
    img: "src/Assets/shujun/homepage/blog/blog1.png",
    action: "/current-events",
    tag: "Talks",
  },
  {
    title: "Seniors Go Digital",
    dateStart: "21 Jan 2023",
    dateEnd: "23 Jan 2023",
    timeString: "9 - 5:30 pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nunc vel ex condimentum varius at sodales nisl. Proin blandit dictum fringilla. Maecenas mattis, est a bibendum posuere, justo ligula mattis ante, ac vulputate nulla massa ut nisi. Sed et orci a sem volutpat posuere. Vestibulum nisi ipsum, vestibulum nec augue non, luctus tristique tortor. Sed tristique ligula ac nisl viverra, nec eleifend mi imperdiet. Donec convallis sagittis diam sed iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at vulputate tellus. Curabitur rutrum mauris purus, sit amet rhoncus libero gravida vulputate. Vestibulum interdum vulputate tempus. Sed finibus condimentum augue non vehicula. Donec tempus eros eget enim tempor posuere. Mauris tempus risus mi, vel elementum mi ultricies quis. Praesent nec semper tortor. Donec sed scelerisque sapien, non consectetur massa.",
    img: "src/Assets/shujun/homepage/blog/blog2.png",
    action: "/current-events",
    tag: "Classes & Workshops",
  },
  {
    title: "37th Annual Wheel, Walk or Jog 2021",
    dateStart: "5 Feb 2023",
    dateEnd: "28 Feb 2023",
    timeString: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nunc vel ex condimentum varius at sodales nisl. Proin blandit dictum fringilla. Maecenas mattis, est a bibendum posuere, justo ligula mattis ante, ac vulputate nulla massa ut nisi. Sed et orci a sem volutpat posuere. Vestibulum nisi ipsum, vestibulum nec augue non, luctus tristique tortor. Sed tristique ligula ac nisl viverra, nec eleifend mi imperdiet. Donec convallis sagittis diam sed iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at vulputate tellus. Curabitur rutrum mauris purus, sit amet rhoncus libero gravida vulputate. Vestibulum interdum vulputate tempus. Sed finibus condimentum augue non vehicula. Donec tempus eros eget enim tempor posuere. Mauris tempus risus mi, vel elementum mi ultricies quis. Praesent nec semper tortor. Donec sed scelerisque sapien, non consectetur massa.",
    img: "src/Assets/shujun/homepage/blog/blog3.png",
    action: "/current-events",
    tag: "Fundraiser",
  },
  {
    title: "Event 1",
    dateStart: "5 Feb 2023",
    dateEnd: "28 Feb 2023",
    timeString: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nunc vel ex condimentum varius at sodales nisl. Proin blandit dictum fringilla. Maecenas mattis, est a bibendum posuere, justo ligula mattis ante, ac vulputate nulla massa ut nisi. Sed et orci a sem volutpat posuere. Vestibulum nisi ipsum, vestibulum nec augue non, luctus tristique tortor. Sed tristique ligula ac nisl viverra, nec eleifend mi imperdiet. Donec convallis sagittis diam sed iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at vulputate tellus. Curabitur rutrum mauris purus, sit amet rhoncus libero gravida vulputate. Vestibulum interdum vulputate tempus. Sed finibus condimentum augue non vehicula. Donec tempus eros eget enim tempor posuere. Mauris tempus risus mi, vel elementum mi ultricies quis. Praesent nec semper tortor. Donec sed scelerisque sapien, non consectetur massa.",
    img: "src/Assets/shujun/homepage/blog/blog3.png",
    action: "/current-events",
    tag: "Fundraiser",
  },
  {
    title: "Event 2",
    dateStart: "5 Feb 2023",
    dateEnd: "28 Feb 2023",
    timeString: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nunc vel ex condimentum varius at sodales nisl. Proin blandit dictum fringilla. Maecenas mattis, est a bibendum posuere, justo ligula mattis ante, ac vulputate nulla massa ut nisi. Sed et orci a sem volutpat posuere. Vestibulum nisi ipsum, vestibulum nec augue non, luctus tristique tortor. Sed tristique ligula ac nisl viverra, nec eleifend mi imperdiet. Donec convallis sagittis diam sed iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at vulputate tellus. Curabitur rutrum mauris purus, sit amet rhoncus libero gravida vulputate. Vestibulum interdum vulputate tempus. Sed finibus condimentum augue non vehicula. Donec tempus eros eget enim tempor posuere. Mauris tempus risus mi, vel elementum mi ultricies quis. Praesent nec semper tortor. Donec sed scelerisque sapien, non consectetur massa.",
    img: "src/Assets/shujun/homepage/blog/blog3.png",
    action: "/current-events",
    tag: "Fundraiser",
  },
  {
    title: "Event 3",
    dateStart: "5 Feb 2023",
    dateEnd: "28 Feb 2023",
    timeString: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nunc vel ex condimentum varius at sodales nisl. Proin blandit dictum fringilla. Maecenas mattis, est a bibendum posuere, justo ligula mattis ante, ac vulputate nulla massa ut nisi. Sed et orci a sem volutpat posuere. Vestibulum nisi ipsum, vestibulum nec augue non, luctus tristique tortor. Sed tristique ligula ac nisl viverra, nec eleifend mi imperdiet. Donec convallis sagittis diam sed iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at vulputate tellus. Curabitur rutrum mauris purus, sit amet rhoncus libero gravida vulputate. Vestibulum interdum vulputate tempus. Sed finibus condimentum augue non vehicula. Donec tempus eros eget enim tempor posuere. Mauris tempus risus mi, vel elementum mi ultricies quis. Praesent nec semper tortor. Donec sed scelerisque sapien, non consectetur massa.",
    img: "src/Assets/shujun/homepage/blog/blog3.png",
    action: "/current-events",
    tag: "Fundraiser",
  },
  {
    title: "Event 4",
    dateStart: "5 Feb 2023",
    dateEnd: "28 Feb 2023",
    timeString: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nunc vel ex condimentum varius at sodales nisl. Proin blandit dictum fringilla. Maecenas mattis, est a bibendum posuere, justo ligula mattis ante, ac vulputate nulla massa ut nisi. Sed et orci a sem volutpat posuere. Vestibulum nisi ipsum, vestibulum nec augue non, luctus tristique tortor. Sed tristique ligula ac nisl viverra, nec eleifend mi imperdiet. Donec convallis sagittis diam sed iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc at vulputate tellus. Curabitur rutrum mauris purus, sit amet rhoncus libero gravida vulputate. Vestibulum interdum vulputate tempus. Sed finibus condimentum augue non vehicula. Donec tempus eros eget enim tempor posuere. Mauris tempus risus mi, vel elementum mi ultricies quis. Praesent nec semper tortor. Donec sed scelerisque sapien, non consectetur massa.",
    img: "src/Assets/shujun/homepage/blog/blog3.png",
    action: "/current-events",
    tag: "Fundraiser",
  },
];

export default dummyEvents;
