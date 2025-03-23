/**
* A basic controller for fetching NavigationLinkSet.
*/
global without sharing class NavigationMenuItemsController {
    
    @AuraEnabled(Cacheable=true)
    public static ConnectApi.NavigationMenuItemCollection getConnectNavigationItems(String menuName, String communityId) {
        
        List<NavigationLinkSet> navigationLinkSets = [
            SELECT Id
            FROM NavigationLinkSet
            WHERE DeveloperName = :menuName
            //WITH SECURITY_ENFORCED
            LIMIT 1
        ];
        NavigationLinkSet navigationLinkSet = (navigationLinkSets.size() == 1)
            ? navigationLinkSets.get(0)
            : null;

        ConnectApi.NavigationMenuItemCollection navigationItems = ConnectApi.NavigationMenu.getCommunityNavigationMenu(communityId, navigationLinkSet.Id, NULL, ConnectApi.PublishStatus.Draft, true, false, NULL);
        system.debug(navigationItems);
        
        return navigationItems;
    }
}