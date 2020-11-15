import React from 'react';
import { 
    FilterList,
    FilterListItem,
  } from 'react-admin';

import { Card, CardContent } from "@material-ui/core";
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import { AsideWrapper } from './AsideFilter.style';

interface Props {
    className?: string;
    alignCenter?: boolean;
}

export const Aside = (props: Props) => {
  
    return (
    <AsideWrapper className={props.className} alignCenter={props.alignCenter}>
        <Card className="filter-box">
            <CardContent className="filter-content"> 
                <FilterList
                    label="Cases"
                    icon={<LibraryBooksIcon />}
                >
                    <FilterListItem
                        label="All"
                        value={{
                            active: null,
                        }}
                    />
                    <FilterListItem
                        label="Open"
                        value={{
                            active: true,
                        }}
                    />
                    <FilterListItem
                        label="Closed"
                        value={{
                            active: false,
                        }}
                    />
                </FilterList>

                <FilterList
                    label="Contact Us"
                    icon={<ContactMailIcon />}
                >
                  <FilterListItem
                        label="Send us a message"
                        value={{
                          sales_lte: 10,
                          sales_gt: 0,
                          sales: undefined,
                      }}
                    />
                </FilterList>

                <FilterList
                    label="Help Center"
                    icon={<MenuBookIcon />}
                >
                </FilterList>
            </CardContent>
        </Card>
    </AsideWrapper>
    );
};