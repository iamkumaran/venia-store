import React from 'react';
import { useQuery } from 'urql';
import MEGA_MENU_QUERY from '../../../utils/gql/megamenu.gql';
import { useStoreContext } from '../../../library/context/store/StoreContext';

const Component = () => {
  const {
    state: { isLocal },
  } = useStoreContext();
  const addQs = isLocal ? '/?path=' : '';
  const [result] = useQuery({
    query: MEGA_MENU_QUERY,
  });

  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div
      className="megaMenu-megaMenu-HGZ col-end-10 col-start-3 flex-grow hidden justify-self-center lg_flex"
      role="navigation">
      {data.categoryList[0].children.map(menu => (
        <div key={`menu-${menu.name}`} className="megaMenuItem-megaMenuItem-1TT px-3 py-0">
          <a
            aria-label={`Category: ${menu.name}. ${menu.children.length ? `${menu.children.length} sub-categories` : ''}`}
            className="megaMenuItem-megaMenuLink-2Rr items-center inline-flex"
            href={`${addQs}/categories/${menu.url_path}/${menu.uid.replaceAll('=', '-')}`}>
            {menu.name}
            {menu.children.length > 0 && (
              <span className="megaMenuItem-arrowDown-24M leading-[0] pl-2xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon-icon-_rq">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            )}
          </a>
          {menu.children.length > 0 && (
            <div className="submenu-submenu_active-1Lj submenu-submenu-iLX absolute bg-white flex-wrap justify-between left-0 px-3 py-5 right-0 hidden">
              <div
                className="submenu-submenuItems-3rB flex flex-wrap justify-between max-w-site ml-auto mr-auto"
                style={{ minWidth: 607 }}>
                {menu.children.map(submenu => (
                  <div
                    key={`submenu-${submenu.name}-${menu.name}`}
                    className="submenuColumn-submenuColumn-1Hl max-w-[235px] p-5">
                    <a
                      className="submenuColumn-link-16H whitespace-nowrap focus_underline hover_underline"
                      href={`${addQs}/categories/${submenu.url_path}/${submenu.uid.replaceAll('=', '-')}`}>
                      <span className="submenuColumn-heading-2is font-semibold">{submenu.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="megaMenuItem-megaMenuItem-1TT px-3 py-0">
        <a className="megaMenuItem-megaMenuLink-2Rr items-center inline-flex" href="/new-products3.html">
          New Products
        </a>
      </div>
    </div>
  );
};

export default Component;
