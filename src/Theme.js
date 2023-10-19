
export const tabTheme = {
    "base": "flex flex-col gap-2",
    "tablist": {
      "base": "flex text-center",
      "tabitem": {
        "base": "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0",
        "styles": {
          "default": {
            "base": "rounded-t-lg",
            "active": {
              "on": "bg-lime-100",
              "off": "text-white hover:bg-lime-50 hover:text-lime-400"
            }
          },
          "underline": {
            "base": "rounded-t-lg",
            "active": {
              "on": "text-lime-400 rounded-t-lg border-b-2 border-lime-400 active",
              "off": "border-b-2 border-transparent text-white hover:border-lime-300 hover:text-lime-400"
            }
          }
        },
        "icon": "mr-2 h-5 w-5"
      }
    },
    "tabpanel": "py-3"
  }
